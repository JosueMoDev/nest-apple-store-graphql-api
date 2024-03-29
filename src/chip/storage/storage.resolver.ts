import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { StorageService } from './storage.service';
import { Storage } from './entities/storage.entity';
import { CreateStorageInput, UpdateStorageInput } from './inputs';

@Resolver(() => Storage)
export class StorageResolver {
  constructor(private readonly storageService: StorageService) {}

  @Mutation(() => Storage)
  createStorage(
    @Args('createStorageInput') createStorageInput: CreateStorageInput,
  ) {
    return this.storageService.create(createStorageInput);
  }

  @Query(() => [Storage], { name: 'storages' })
  findAll() {
    return this.storageService.findAll();
  }

  @Query(() => Storage, { name: 'storage' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.storageService.findOne(id);
  }

  @Mutation(() => Storage)
  updateStorage(
    @Args('updateStorageInput') updateStorageInput: UpdateStorageInput,
  ) {
    return this.storageService.update(updateStorageInput);
  }

  @Mutation(() => Storage)
  removeStorage(@Args('id', { type: () => ID }) id: string) {
    return this.storageService.remove(id);
  }
}
