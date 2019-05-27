export type Maybe<T> = T | null;

export interface BaseReviewInput {
  value: number;

  title: string;

  text: string;

  hotelId: string;

  userId: string;

  date?: Maybe<DateTime>;
}

export interface GetAllHotelInput {
  skip?: Maybe<number>;

  take?: number;

  dates?: Maybe<DateInputSimple>;

  from?: Maybe<DateTime>;

  to?: Maybe<DateTime>;

  prices?: Maybe<PriceRangeInput>;

  amenities?: Maybe<Amenity[]>;
}

export interface DateInputSimple {
  from?: DateTime;

  to?: DateTime;
}

export interface PriceRangeInput {
  low?: Maybe<number>;

  high?: Maybe<number>;
}

export interface Amenity {
  name?: Maybe<string[]>;
}

export interface HotelGetInput {
  hotelId: string;
}

export interface ReservationInput {
  dates: DateInput;

  userId: string;

  hotelId: string;
}

export interface DateInput {
  from?: DateTime;

  to?: DateTime;

  hotelId: string;
}

export interface GetMessagesInput {
  sentBy: string;

  user: string;
}

export interface HotelInput {
  name: string;

  photos?: Maybe<PhotoInput[]>;

  price: string;

  loveCount?: Maybe<number>;

  commentCount?: Maybe<number>;

  weatherIconName?: Maybe<string>;

  distanceKm?: Maybe<string>;

  temperature?: Maybe<string>;

  weatherDescription?: Maybe<string>;
}

export interface PhotoInput {
  uri: string;

  name: string;

  description?: Maybe<string>;

  isPublished?: Maybe<boolean>;
}

export interface ProductInput {
  name: string;
}

export interface RegisterInput {
  password: string;

  firstName: string;

  lastName: string;

  email: string;
}

export interface ChangePasswordInput {
  password: string;

  token: string;
}

export interface BaseListInput {
  skip?: Maybe<number>;

  take?: number;
}

export interface PasswordInput {
  password: string;
}

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type DateTime = any;

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export type AddNewMessageVariables = {
  message: string;
  sentBy: string;
};

export type AddNewMessageMutation = {
  __typename?: "Mutation";

  addNewMessage: boolean;
};

export type GetMyMessagesVariables = {
  input: GetMessagesInput;
};

export type GetMyMessagesQuery = {
  __typename?: "Query";

  getMyMessages: Maybe<GetMyMessagesGetMyMessages[]>;
};

export type GetMyMessagesGetMyMessages = {
  __typename?: "Message";

  id: string;

  message: string;

  createdAt: DateTime;

  sentBy: string;
};

export type NewMessageVariables = {
  message: string;
  sentBy: string;
};

export type NewMessageSubscription = {
  __typename?: "Subscription";

  newMessage: NewMessageNewMessage;
};

export type NewMessageNewMessage = {
  __typename?: "MessageSubType";

  id: string;

  message: Maybe<string>;

  sentBy: string;

  createdAt: Maybe<DateTime>;
};

export type CreateReservationVariables = {
  data: ReservationInput;
};

export type CreateReservationMutation = {
  __typename?: "Mutation";

  createReservation: CreateReservationCreateReservation;
};

export type CreateReservationCreateReservation = {
  __typename?: "Reservation";

  id: string;

  from: DateTime;

  to: DateTime;

  user: CreateReservationUser;

  room: CreateReservationRoom;
};

export type CreateReservationUser = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;
};

export type CreateReservationRoom = {
  __typename?: "Room";

  id: string;

  roomNumber: string;

  type: string;

  beds: number;

  costPerNight: number;

  reserved: Maybe<CreateReservationReserved[]>;
};

export type CreateReservationReserved = {
  __typename?: "Reservation";

  id: string;

  from: DateTime;

  to: DateTime;
};

export type ChangePasswordVariables = {
  data: ChangePasswordInput;
};

export type ChangePasswordMutation = {
  __typename?: "Mutation";

  changePassword: Maybe<ChangePasswordChangePassword>;
};

export type ChangePasswordChangePassword = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
};

export type ConfirmUserVariables = {
  token: string;
};

export type ConfirmUserMutation = {
  __typename?: "Mutation";

  confirmUser: boolean;
};

export type ForgotPasswordVariables = {
  email: string;
};

export type ForgotPasswordMutation = {
  __typename?: "Mutation";

  forgotPassword: boolean;
};

export type LoginVariables = {
  email: string;
  password: string;
};

export type LoginMutation = {
  __typename?: "Mutation";

  login: Maybe<LoginLogin>;
};

export type LoginLogin = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
};

export type LogoutVariables = {};

export type LogoutMutation = {
  __typename?: "Mutation";

  logout: boolean;
};

export type MeVariables = {};

export type MeQuery = {
  __typename?: "Query";

  me: Maybe<MeMe>;
};

export type MeMe = {
  __typename?: "User";

  firstName: string;

  lastName: string;

  email: string;

  name: string;

  id: string;
};

export type RegisterVariables = {
  data: RegisterInput;
};

export type RegisterMutation = {
  __typename?: "Mutation";

  register: RegisterRegister;
};

export type RegisterRegister = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
};

export type CreateReviewVariables = {
  data: BaseReviewInput;
};

export type CreateReviewMutation = {
  __typename?: "Mutation";

  createReview: CreateReviewCreateReview;
};

export type CreateReviewCreateReview = {
  __typename?: "Review";

  id: string;

  value: number;
};

export type GetHotelByIdVariables = {
  data: HotelGetInput;
};

export type GetHotelByIdQuery = {
  __typename?: "Query";

  getHotelByID: GetHotelByIdGetHotelById;
};

export type GetHotelByIdGetHotelById = {
  __typename?: "Hotel";

  id: string;

  name: string;

  rooms: Maybe<GetHotelByIdRooms[]>;
};

export type GetHotelByIdRooms = {
  __typename?: "Room";

  id: string;

  roomNumber: string;

  type: string;

  beds: number;

  costPerNight: number;

  reserved: Maybe<GetHotelByIdReserved[]>;
};

export type GetHotelByIdReserved = {
  __typename?: "Reservation";

  id: string;

  from: DateTime;

  to: DateTime;
};

export type GetAllHotelDataVariables = {
  data?: Maybe<GetAllHotelInput>;
};

export type GetAllHotelDataQuery = {
  __typename?: "Query";

  getAllHotel: Maybe<GetAllHotelDataGetAllHotel[]>;
};

export type GetAllHotelDataGetAllHotel = {
  __typename?: "Hotel";

  reviewCount: number;

  averageRating: number;

  name: string;

  id: string;

  price: string;

  rooms: Maybe<GetAllHotelDataRooms[]>;

  amenities: Maybe<string[]>;

  loveCount: Maybe<number>;

  commentCount: Maybe<number>;

  address: Maybe<string>;

  suite: Maybe<string>;

  city: Maybe<string>;

  state: Maybe<string>;

  zipCode: Maybe<string>;

  zipCodeSuffix: Maybe<number>;

  photos: Maybe<GetAllHotelDataPhotos[]>;

  reviews: Maybe<GetAllHotelDataReviews[]>;
};

export type GetAllHotelDataRooms = {
  __typename?: "Room";

  id: string;

  roomNumber: string;

  beds: number;

  type: string;

  beds: number;

  maxOccupancy: number;

  costPerNight: number;

  reserved: Maybe<GetAllHotelDataReserved[]>;
};

export type GetAllHotelDataReserved = {
  __typename?: "Reservation";

  id: string;

  from: DateTime;

  to: DateTime;
};

export type GetAllHotelDataPhotos = {
  __typename?: "Photo";

  id: string;

  uri: string;
};

export type GetAllHotelDataReviews = {
  __typename?: "Review";

  value: number;

  id: string;
};

export type HelloWorldVariables = {};

export type HelloWorldQuery = {
  __typename?: "Query";

  helloWorld: string;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const AddNewMessageDocument = gql`
  mutation AddNewMessage($message: String!, $sentBy: String!) {
    addNewMessage(message: $message, sentBy: $sentBy)
  }
`;
export class AddNewMessageComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<AddNewMessageMutation, AddNewMessageVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<AddNewMessageMutation, AddNewMessageVariables>
        mutation={AddNewMessageDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type AddNewMessageProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<AddNewMessageMutation, AddNewMessageVariables>
> &
  TChildProps;
export type AddNewMessageMutationFn = ReactApollo.MutationFn<
  AddNewMessageMutation,
  AddNewMessageVariables
>;
export function AddNewMessageHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        AddNewMessageMutation,
        AddNewMessageVariables,
        AddNewMessageProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    AddNewMessageMutation,
    AddNewMessageVariables,
    AddNewMessageProps<TChildProps>
  >(AddNewMessageDocument, operationOptions);
}
export const GetMyMessagesDocument = gql`
  query GetMyMessages($input: GetMessagesInput!) {
    getMyMessages(input: $input) {
      id
      message
      createdAt
      sentBy
    }
  }
`;
export class GetMyMessagesComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetMyMessagesQuery, GetMyMessagesVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetMyMessagesQuery, GetMyMessagesVariables>
        query={GetMyMessagesDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetMyMessagesProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetMyMessagesQuery, GetMyMessagesVariables>
> &
  TChildProps;
export function GetMyMessagesHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetMyMessagesQuery,
        GetMyMessagesVariables,
        GetMyMessagesProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetMyMessagesQuery,
    GetMyMessagesVariables,
    GetMyMessagesProps<TChildProps>
  >(GetMyMessagesDocument, operationOptions);
}
export const NewMessageDocument = gql`
  subscription NewMessage($message: String!, $sentBy: String!) {
    newMessage(message: $message, sentBy: $sentBy) {
      id
      message
      sentBy
      createdAt
    }
  }
`;
export class NewMessageComponent extends React.Component<
  Partial<
    ReactApollo.SubscriptionProps<NewMessageSubscription, NewMessageVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Subscription<NewMessageSubscription, NewMessageVariables>
        subscription={NewMessageDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type NewMessageProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<NewMessageSubscription, NewMessageVariables>
> &
  TChildProps;
export function NewMessageHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        NewMessageSubscription,
        NewMessageVariables,
        NewMessageProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    NewMessageSubscription,
    NewMessageVariables,
    NewMessageProps<TChildProps>
  >(NewMessageDocument, operationOptions);
}
export const CreateReservationDocument = gql`
  mutation CreateReservation($data: ReservationInput!) {
    createReservation(data: $data) {
      id
      from
      to
      user {
        id
        firstName
        lastName
        email
      }
      room {
        id
        roomNumber
        type
        beds
        costPerNight
        reserved {
          id
          from
          to
        }
      }
    }
  }
`;
export class CreateReservationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CreateReservationMutation,
      CreateReservationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CreateReservationMutation,
        CreateReservationVariables
      >
        mutation={CreateReservationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreateReservationProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateReservationMutation, CreateReservationVariables>
> &
  TChildProps;
export type CreateReservationMutationFn = ReactApollo.MutationFn<
  CreateReservationMutation,
  CreateReservationVariables
>;
export function CreateReservationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateReservationMutation,
        CreateReservationVariables,
        CreateReservationProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreateReservationMutation,
    CreateReservationVariables,
    CreateReservationProps<TChildProps>
  >(CreateReservationDocument, operationOptions);
}
export const ChangePasswordDocument = gql`
  mutation ChangePassword($data: ChangePasswordInput!) {
    changePassword(data: $data) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
export class ChangePasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ChangePasswordMutation, ChangePasswordVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ChangePasswordMutation, ChangePasswordVariables>
        mutation={ChangePasswordDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ChangePasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ChangePasswordMutation, ChangePasswordVariables>
> &
  TChildProps;
export type ChangePasswordMutationFn = ReactApollo.MutationFn<
  ChangePasswordMutation,
  ChangePasswordVariables
>;
export function ChangePasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ChangePasswordMutation,
        ChangePasswordVariables,
        ChangePasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ChangePasswordMutation,
    ChangePasswordVariables,
    ChangePasswordProps<TChildProps>
  >(ChangePasswordDocument, operationOptions);
}
export const ConfirmUserDocument = gql`
  mutation ConfirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;
export class ConfirmUserComponent extends React.Component<
  Partial<ReactApollo.MutationProps<ConfirmUserMutation, ConfirmUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<ConfirmUserMutation, ConfirmUserVariables>
        mutation={ConfirmUserDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ConfirmUserProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ConfirmUserMutation, ConfirmUserVariables>
> &
  TChildProps;
export type ConfirmUserMutationFn = ReactApollo.MutationFn<
  ConfirmUserMutation,
  ConfirmUserVariables
>;
export function ConfirmUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ConfirmUserMutation,
        ConfirmUserVariables,
        ConfirmUserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ConfirmUserMutation,
    ConfirmUserVariables,
    ConfirmUserProps<TChildProps>
  >(ConfirmUserDocument, operationOptions);
}
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
export class ForgotPasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ForgotPasswordMutation, ForgotPasswordVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ForgotPasswordMutation, ForgotPasswordVariables>
        mutation={ForgotPasswordDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ForgotPasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ForgotPasswordMutation, ForgotPasswordVariables>
> &
  TChildProps;
export type ForgotPasswordMutationFn = ReactApollo.MutationFn<
  ForgotPasswordMutation,
  ForgotPasswordVariables
>;
export function ForgotPasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ForgotPasswordMutation,
        ForgotPasswordVariables,
        ForgotPasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ForgotPasswordMutation,
    ForgotPasswordVariables,
    ForgotPasswordProps<TChildProps>
  >(ForgotPasswordDocument, operationOptions);
}
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
export class LoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LoginMutation, LoginVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LoginMutation, LoginVariables>
        mutation={LoginDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LoginProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginVariables>
> &
  TChildProps;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginVariables
>;
export function LoginHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutation,
        LoginVariables,
        LoginProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LoginMutation,
    LoginVariables,
    LoginProps<TChildProps>
  >(LoginDocument, operationOptions);
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export class LogoutComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LogoutMutation, LogoutVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LogoutMutation, LogoutVariables>
        mutation={LogoutDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LogoutProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LogoutMutation, LogoutVariables>
> &
  TChildProps;
export type LogoutMutationFn = ReactApollo.MutationFn<
  LogoutMutation,
  LogoutVariables
>;
export function LogoutHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LogoutMutation,
        LogoutVariables,
        LogoutProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LogoutMutation,
    LogoutVariables,
    LogoutProps<TChildProps>
  >(LogoutDocument, operationOptions);
}
export const MeDocument = gql`
  query Me {
    me {
      firstName
      lastName
      email
      name
      id
    }
  }
`;
export class MeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQuery, MeVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<MeQuery, MeVariables>
        query={MeDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type MeProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<MeQuery, MeVariables>
> &
  TChildProps;
export function MeHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQuery,
        MeVariables,
        MeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    MeQuery,
    MeVariables,
    MeProps<TChildProps>
  >(MeDocument, operationOptions);
}
export const RegisterDocument = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
export class RegisterComponent extends React.Component<
  Partial<ReactApollo.MutationProps<RegisterMutation, RegisterVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<RegisterMutation, RegisterVariables>
        mutation={RegisterDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type RegisterProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterVariables>
> &
  TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<
  RegisterMutation,
  RegisterVariables
>;
export function RegisterHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RegisterMutation,
        RegisterVariables,
        RegisterProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    RegisterMutation,
    RegisterVariables,
    RegisterProps<TChildProps>
  >(RegisterDocument, operationOptions);
}
export const CreateReviewDocument = gql`
  mutation CreateReview($data: BaseReviewInput!) {
    createReview(data: $data) {
      id
      value
    }
  }
`;
export class CreateReviewComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<CreateReviewMutation, CreateReviewVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateReviewMutation, CreateReviewVariables>
        mutation={CreateReviewDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreateReviewProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateReviewMutation, CreateReviewVariables>
> &
  TChildProps;
export type CreateReviewMutationFn = ReactApollo.MutationFn<
  CreateReviewMutation,
  CreateReviewVariables
>;
export function CreateReviewHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateReviewMutation,
        CreateReviewVariables,
        CreateReviewProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreateReviewMutation,
    CreateReviewVariables,
    CreateReviewProps<TChildProps>
  >(CreateReviewDocument, operationOptions);
}
export const GetHotelByIdDocument = gql`
  query GetHotelByID($data: HotelGetInput!) {
    getHotelByID(data: $data) {
      id
      name
      rooms {
        id
        roomNumber
        type
        beds
        costPerNight
        reserved {
          id
          from
          to
        }
      }
    }
  }
`;
export class GetHotelByIdComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetHotelByIdQuery, GetHotelByIdVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetHotelByIdQuery, GetHotelByIdVariables>
        query={GetHotelByIdDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetHotelByIdProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetHotelByIdQuery, GetHotelByIdVariables>
> &
  TChildProps;
export function GetHotelByIdHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetHotelByIdQuery,
        GetHotelByIdVariables,
        GetHotelByIdProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetHotelByIdQuery,
    GetHotelByIdVariables,
    GetHotelByIdProps<TChildProps>
  >(GetHotelByIdDocument, operationOptions);
}
export const GetAllHotelDataDocument = gql`
  query GetAllHotelData($data: GetAllHotelInput) {
    getAllHotel(data: $data) {
      reviewCount
      averageRating
      name
      id
      price
      rooms {
        id
        roomNumber
        beds
        type
        beds
        maxOccupancy
        costPerNight
        reserved {
          id
          from
          to
        }
      }
      amenities
      loveCount
      commentCount
      address
      suite
      city
      state
      zipCode
      zipCodeSuffix
      photos {
        id
        uri
      }
      reviews {
        value
        id
      }
    }
  }
`;
export class GetAllHotelDataComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetAllHotelDataQuery, GetAllHotelDataVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetAllHotelDataQuery, GetAllHotelDataVariables>
        query={GetAllHotelDataDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetAllHotelDataProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetAllHotelDataQuery, GetAllHotelDataVariables>
> &
  TChildProps;
export function GetAllHotelDataHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetAllHotelDataQuery,
        GetAllHotelDataVariables,
        GetAllHotelDataProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetAllHotelDataQuery,
    GetAllHotelDataVariables,
    GetAllHotelDataProps<TChildProps>
  >(GetAllHotelDataDocument, operationOptions);
}
export const HelloWorldDocument = gql`
  query HelloWorld {
    helloWorld
  }
`;
export class HelloWorldComponent extends React.Component<
  Partial<ReactApollo.QueryProps<HelloWorldQuery, HelloWorldVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<HelloWorldQuery, HelloWorldVariables>
        query={HelloWorldDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type HelloWorldProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<HelloWorldQuery, HelloWorldVariables>
> &
  TChildProps;
export function HelloWorldHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        HelloWorldQuery,
        HelloWorldVariables,
        HelloWorldProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    HelloWorldQuery,
    HelloWorldVariables,
    HelloWorldProps<TChildProps>
  >(HelloWorldDocument, operationOptions);
}
