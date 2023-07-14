import { PurchaseIntention } from "@/intention-domain/enterprise/entities/purchase-intention";

export interface PurchaseIntentionRepository {
  create(purchaseIntention: PurchaseIntention): Promise<void>
}
