import { BaseEntity } from "./base-entity";
import { PlainBaseEntity } from "@/@shared/entities/base-entity";

export const entityToBasePlain = (entity: BaseEntity): PlainBaseEntity => ({
  id: entity.id.value,
  created_at: entity.created_at,
  deleted_at: entity.deleted_at,
});
