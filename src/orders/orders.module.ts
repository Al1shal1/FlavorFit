import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [OrdersResolver, OrdersService],
  imports: [PrismaModule],

})
export class OrdersModule {}
