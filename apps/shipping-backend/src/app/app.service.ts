import { Injectable } from '@nestjs/common';
import { ExampleSharedEntity } from '@ss/data';

@Injectable()
export class AppService {
	someData: ExampleSharedEntity;

	getData(): { message: string } {
		return { message: 'Welcome to shipping-backend!' };
	}
}
