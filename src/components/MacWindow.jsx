import { Component } from "react";
import Draggable from 'react-draggable';

class newWindow extends Component {
    render() {
        return (
            <Draggable handle="#handle">
                <div className='w-1/2 h-1/2 bg-gray-50 rounded-xl'>
                    <div id="handle"className='w-full h-7 bg-gray-700 rounded-t-xl flex items-center pl-3'>
                    <div className="rounded-full bg-red-500 w-4 h-4 mx-1"></div>
                    <div className="rounded-full bg-yellow-500 w-4 h-4 mx-1"></div>
                    <div className="rounded-full bg-green-500 w-4 h-4 mx-1"></div>
                    </div>
                </div>
            </Draggable>
        );
    }
}
export default newWindow;