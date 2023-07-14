import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { PurchaseIntention } from '../../enterprise/entities/purchase-intention'
import { PurchaseIntentionRepository } from '../repositories/purchase-intention-repository'

interface CreatePurchaseIntentionUseCaseRequest {
  buyerId: string
  addressId: string
  orderNumber: number
  products: Array<object>
}

export class CreatePurchaseIntentionUseCase {
  constructor(
    private purchaseIntentionRepository: PurchaseIntentionRepository,
  ) {}

  async execute({
    buyerId,
    addressId,
    orderNumber,
    products,
  }: CreatePurchaseIntentionUseCaseRequest) {
    const purchaseIntention = PurchaseIntention.create({
      buyerId: new UniqueEntityID(buyerId),
      addressId: new UniqueEntityID(addressId),
      orderNumber,
      products,
    })

    await this.purchaseIntentionRepository.create(purchaseIntention)

    return purchaseIntention
  }
}
