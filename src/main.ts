import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// http exception  filter gloable
import { HttpExceptionFilter } from './filters/httpException.filter';
import { TransformInterceptor } from './interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局注册错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(4000);
}
bootstrap();
