
export interface IXFormResponseValue {
    ValueId: string;
    Value: any;
}
export class XFormResponseModel  {
    Id: string;
    UserId: string;
    DeviceId: string;
    Values: IXFormResponseValue[];
   
}