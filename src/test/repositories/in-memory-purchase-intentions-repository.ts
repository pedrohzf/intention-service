import { PurchaseIntentionRepository } from "@/intention-domain/application/repositories/purchase-intention-repository";
import { PurchaseIntention } from "@/intention-domain/enterprise/entities/purchase-intention";

export class InMemoryPurchaseIntentionsRepository implements PurchaseIntentionRepository {
    public items: PurchaseIntention[] = []
    
    async create(purchaseIntention: PurchaseIntention) {
        this.items.push(purchaseIntention)
    }
}