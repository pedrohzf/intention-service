import { InMemoryPurchaseIntentionsRepository } from '@/test/repositories/in-memory-purchase-intentions-repository'
import { CreatePurchaseIntentionUseCase } from './create-purchase-intention'

let inMemoryPurchaseIntentionsRepository: InMemoryPurchaseIntentionsRepository
let createPurchaseIntention: CreatePurchaseIntentionUseCase

describe('Create a Purchase Intention', () => {
  beforeEach(() => {
    inMemoryPurchaseIntentionsRepository = new InMemoryPurchaseIntentionsRepository()
    createPurchaseIntention = new CreatePurchaseIntentionUseCase(inMemoryPurchaseIntentionsRepository)
  })
  
  it('should be able to create a purchase intention', async () => {
    const { purchaseIntention } = await createPurchaseIntention.execute({
      buyerId: '1',
      addressId: '1',
      orderNumber: 1,
      products: [{ productId: 1, quantity: 10 }],
    })
  
    expect(purchaseIntention.id).toBeTruthy()
    expect(inMemoryPurchaseIntentionsRepository.items[0].id).toEqual(purchaseIntention.id)
  })
})
