import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface PurchaseIntentionProps {
  buyerId: UniqueEntityID
  addressId: UniqueEntityID
  orderNumber: number
  products: Array<object>
  createdAt: Date
  updatedAt?: Date
}

export class PurchaseIntention extends Entity<PurchaseIntentionProps> {
  get buyerId() {
    return this.props.buyerId
  }

  get addressId() {
    return this.props.addressId
  }

  get orderNumber() {
    return this.props.orderNumber
  }

  get products() {
    return this.props.products
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set products(products: Array<object>) {
    this.props.products = products
    this.touch()
  }

  static create(
    props: Optional<PurchaseIntentionProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const purchaseIntention = new PurchaseIntention(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return purchaseIntention
  }
}
