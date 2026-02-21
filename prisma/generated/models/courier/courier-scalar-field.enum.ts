import { registerEnumType } from '@nestjs/graphql';

export enum CourierScalarFieldEnum {
    id = "id",
    name = "name",
    phone = "phone",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CourierScalarFieldEnum, { name: 'CourierScalarFieldEnum', description: undefined })
