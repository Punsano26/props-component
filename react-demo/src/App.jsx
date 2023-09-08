
import './App.css'
import Post from './component/Post'
import PostFunction  from './component/PostFunction';
import Comment from './component/Comment';
import StateInClass from './component/StatelnClass';
import StateInFunction from './component/stateinfunction';
function App() {
  return (
    <>
     {/* { <Post userID=" Punsan" 
      message="ง่วงมาก">
        <Comment userID="San"
        message="สวัสดีครับ"
      />
      <Comment userID="Tanny"
        message="หิวข้าว"
      />
      <Comment userID="Tinny"
        message="อยากกลับบ้านครับ"
      />
      </Post>
      <PostFunction/>} */}


      {/* <StateInClass name="Punsan Somkla" id="1"/>
      <StateInClass name="SE NPRU" id="2"/> */}

      
      {/* <StateInClass name = "Name: Punsan Somkla"/> */}

      <StateInFunction name="Punsan Somkla" />

      

      
      
    </>
  );
}

export default App
