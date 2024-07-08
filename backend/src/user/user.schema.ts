import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;
export class Otp {
  @Prop({ default: '' })
  code: number;
  @Prop({ required: false })
  exp: string;
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: String;

  @Prop({ required: true })
  email: String;

  @Prop({ required: true })
  contact_number: String;

  @Prop({ required: true })
  password: String;

  @Prop({ required: true, default: 'USER' })
  userType: 'ADMIN' | 'USER';

  @Prop({ default: false })
  isDeactive: boolean;

  @Prop({ required: false })
  otp: Otp;

  @Prop({ default: '' })
  resetToken: string;

  @Prop({ default: false })
  varified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
