import "@testing-library/jest-dom";
import { apiMock } from "./mocks/api";
jest.mock("next/router", () => jest.requireActual("next-router-mock"));
jest.mock("react-query");

beforeAll(() => apiMock.listen());
afterEach(() => apiMock.resetHandlers());
afterAll(() => apiMock.close());
