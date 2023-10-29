import "@testing-library/jest-dom";
// import { server } from "./mocks/api";
jest.mock("next/router", () => jest.requireActual("next-router-mock"));
jest.mock("react-query");

// tentei configurar o msw porem tive uns erros que nao conseguir identificar no momento. Vou continuar com outras features, mockando com o jest
// beforeAll(() => {
// 	// Start the interception.
// 	server.listen();
// });

// afterEach(() => {
// 	// Remove any handlers you may have added
// 	// in individual tests (runtime handlers).
// 	server.resetHandlers();
// });

// afterAll(() => {
// 	// Disable request interception and clean up.
// 	server.close();
// });
