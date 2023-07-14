import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface BuyerProps {
  name: string
}

export class Buyer extends Entity<BuyerProps> {
  get name() {
    return this.props.name
  }

  static create(props: BuyerProps, id?: UniqueEntityID) {
    const buyer = new Buyer(props, id)

    return buyer
  }
}
