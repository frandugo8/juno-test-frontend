
import ReactDOM from 'react-dom';
import Forum from './Forum.component';
import { BrowserRouter as Router} from "react-router-dom";

describe("Forum Component", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Forum/></Router>, div);
  })
})
