import { PurchaseIntention } from '@/intention-domain/enterprise/entities/purchase-intention'
import { PurchaseIntentionRepository } from '../repositories/purchase-intention-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface CreatePurchaseIntentionUseCaseRequest {
  buyerId: string
  addressId: string
  orderNumber: number
  products: Array<object>
}

interface CreatePurchaseIntentionUseCaseResponse {
  purchaseIntention: PurchaseIntention
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
  }: CreatePurchaseIntentionUseCaseRequest): Promise<CreatePurchaseIntentionUseCaseResponse> {
    const purchaseIntention = PurchaseIntention.create({
      buyerId: new UniqueEntityID(buyerId),
      addressId: new UniqueEntityID(addressId),
      orderNumber,
      products,
    })

    await this.purchaseIntentionRepository.create(purchaseIntention)

    return {
      purchaseIntention
    }
  }
}
