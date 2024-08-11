import React, {memo} from "react";

function SlowPost({ index }:{index: number}) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
      // Do nothing for 1 ms per item to emulate extremely slow code
    }
  
    return (
      <li className="item">
        Post #{index + 1}
      </li>
    );
  }

export const PostsTab = () => {
//memo(function PostsTab() {
    let items = [];
    for (let i = 0; i < 2000; i++) {
        items.push(<SlowPost key={i} index={i} />);
    }
    return (
        <ul className="items">
            {items}
        </ul>
    );

}