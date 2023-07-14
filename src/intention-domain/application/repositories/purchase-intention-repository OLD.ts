import { PurchaseIntention } from '../../enterprise/entities/purchase-intention'

export interface PurchaseIntentionRepository {
  create(purchaseIntention: PurchaseIntention): Promise<void>
}
