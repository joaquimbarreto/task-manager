import React from "react";
// import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "./App";
import Register from "./components/Register";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// jest and enzyme
test("valid path should not redirect to 404", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/register"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(Register)).toHaveLength(1);
});
