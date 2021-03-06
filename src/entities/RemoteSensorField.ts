import { Entity, Property, PrimaryKey, OneToMany, Collection, Cascade, ManyToOne, Enum } from "@mikro-orm/core";
import { RemoteSensor } from "./RemoteSensor";

export const FieldPriority = {
    PRIMARY: 0,
    SECONDARY: 1,
};

export const colorRegex = /^(0x|0X)[a-fA-F0-9]{6}$/;

@Entity()
export class RemoteSensorField {
    @PrimaryKey()
    id!: number;

    // field of the sensor, temperature, humidity, etc.
    @Property()
    name: string;

    // how the field should be addressed as
    @Property()
    label: string;

    // color, number from 0x000000..0xFFFFFF rgb hex string represented as hex number
    @Property()
    color: number;

    @Property()
    unit: string;

    // priority of the field, in which order they should field be displayed and which chart should it occupy
    @Property()
    priority: number;

    // range between field values should be
    @Property()
    range_min: number;

    @Property()
    range_max: number;

    @Property({ nullable: true })
    alarm_lower_threshold: number | null;

    @Property({ nullable: true })
    alarm_upper_threshold: number | null;

    @ManyToOne(() => RemoteSensor)
    remote_sensor!: RemoteSensor;
}
