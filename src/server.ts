import app from './app';
import config from './config';

async function bootstrap() {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });

  // const exitHandler = () => {
  //   if (server) {
  //     server.close(() => {
  //       logger.info('Server closed');
  //     });
  //   }
  //   process.exit(1);
  // };

  // const unexpectedErrorHandler = (error: unknown) => {
  //   errorlogger.error(error);
  //   exitHandler();
  // };

  // process.on('uncaughtException', unexpectedErrorHandler);
  // process.on('unhandledRejection', unexpectedErrorHandler);

  // process.on('SIGTERM', () => {
  //   logger.info('SIGTERM received');
  //   if (server) {
  //     server.close();
  //   }
  // });
}

bootstrap();
