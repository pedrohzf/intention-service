import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface AddressProps {
  buyerId: UniqueEntityID
  address: string
}

export class Address extends Entity<AddressProps> {
  get buyerId() {
    return this.props.buyerId
  }

  get address() {
    return this.props.address
  }

  static create(props: AddressProps, id?: UniqueEntityID) {
    const address = new Address(props, id)

    return address
  }
}
