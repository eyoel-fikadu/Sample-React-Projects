import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message'
import Segment from './Segment';

// const App = () => {
//     return (
//         <div className='ui container comments'>
//             <ApprovalCard>
//                 <CommentDetail 
//                     author="Sam" 
//                     date="Today 6:00PM" 
//                     comment="Sams comment" 
//                     image={faker.image.avatar()}
//                     />
//             </ApprovalCard>
           
//             <ApprovalCard>
//                 <CommentDetail 
//                     author="Alex"
//                     date="Today 6:50PM" 
//                     comment="Alex comment" 
//                     image={faker.image.avatar()}
//                     />
//             </ApprovalCard>
           
//            <ApprovalCard>
//             <CommentDetail 
//                     author="Jane" 
//                     date="Yesterday 12:00PM" 
//                     comment="Jane comment" 
//                     image={faker.image.avatar()}
//                     />
//            </ApprovalCard>
           
//         </div>
//     );
// };


// const App = () => {
//     return (
//         <div>
//             <Message header="Change in service" detail="we just updated our privacy policy hereto better service our customer"/>
//         </div>
//     );
// }

const App = () => {
    return (
        <div>
            <Segment>
                
                <div className='ui icon header'>
                    <i className='pdf file outline icon'></i>
                </div>
                <div className='ui primary button'>Add coument</div>
                
            </Segment>
            <Segment>
                
                <h4 className='ui header'>For your information</h4>
                <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                </div>
                
            </Segment>
        </div>
     

        
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));