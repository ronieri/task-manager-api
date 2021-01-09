import { BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatus = Object.values(TaskStatus);

    transform(value: any): any {
        
        value = value.toUpperCase();

        if(!this.isValid(value)){
            throw new BadRequestException(`"${value}" is not a valid status`);
        }
        
        return value;
    }

    private isValid(status: any): boolean {
        const idx = this.allowedStatus.indexOf(status);

        return idx !== -1;
    }
}