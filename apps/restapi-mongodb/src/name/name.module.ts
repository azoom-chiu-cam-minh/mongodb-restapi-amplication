import { Module } from "@nestjs/common";
import { NameModuleBase } from "./base/name.module.base";
import { NameService } from "./name.service";
import { NameController } from "./name.controller";

@Module({
  imports: [NameModuleBase],
  controllers: [NameController],
  providers: [NameService],
  exports: [NameService],
})
export class NameModule {}
