import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { BadRequestException } from '@nestjs/common';

describe('CategoriesController', () => {
  let categoryController: CategoriesController;
  let categoryService: CategoriesService;
  let mockCategoryService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findAllProd: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [
        CategoriesService,
        { provide: CategoriesService, useValue: mockCategoryService },
      ],
    }).compile();

    categoryController = module.get<CategoriesController>(CategoriesController);
    categoryService = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(categoryController).toBeDefined();
  });
  it('should be defined', () => {
    expect(categoryService).toBeDefined();
  });

  describe('Create Category', () => {
    it('Should create a category and call CategoryService.create', async () => {
      //arrange
      const category: CreateCategoryDto = {
        name: 'Bedroom',
        image_link: 'https://postimg.cc/MTJY8N15',
      };

      jest.spyOn(mockCategoryService, 'create').mockImplementation(() =>
        Promise.resolve({
          id: 1,
          name: 'Bedroom',
          image_link: 'https://postimg.cc/MTJY8N15',
        }),
      );

      //act
      const actual = await categoryController.create(category);

      //Assert
      expect(categoryService.create).toHaveBeenCalledTimes(1);
      expect(actual).toEqual({
        id: 1,
        name: 'Bedroom',
        image_link: 'https://postimg.cc/MTJY8N15',
      });
    });
  });

  describe('findAll categories', () => {
    it('Should return all categories and call CategoriesService.findAll', async () => {
      //arrange
      jest
        .spyOn(mockCategoryService, 'findAll')
        .mockImplementation(() =>
          Promise.resolve([{ id: 1, name: '', image_link: '' }]),
        );

      //act
      const actual = await categoryController.findAll()

      //assert
        expect(actual.length).toBeGreaterThan(0)
        expect(categoryService.findAll).toHaveBeenCalledTimes(1)

    });
  });
});
