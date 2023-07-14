import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { PurchaseIntention, PurchaseIntentionProps } from "@/intention-domain/enterprise/entities/purchase-intention";

export function makePurchaseIntention(
    override: Partial<PurchaseIntentionProps> = {},
    id?: UniqueEntityID,
) {
    const purchaseIntention = PurchaseIntention.create(
        {
            buyerId: new UniqueEntityID(),
            addressId: new UniqueEntityID(),
            orderNumber: 1,
            products: [{product: 'test', quantity: 1}],
            ...override,
        },
        id,
    )

    return purchaseIntention
}