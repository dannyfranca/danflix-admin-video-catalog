import { TimestampableEntity } from "./timestampable-entity";
import { PlainTimestampable } from "@/@shared/entities/timestampable-entity";

export const toTimestampablePlain = (
  entity: TimestampableEntity
): PlainTimestampable => ({
  id: entity.id.value,
  created_at: entity.created_at,
  deleted_at: entity.deleted_at,
});
