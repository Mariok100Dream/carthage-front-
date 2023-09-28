import React, { useState } from 'react';
import SortableTree from '@nosferatu500/react-sortable-tree';
import { toggleExpandedForAll, changeNodeAtPath, insertNode, removeNodeAtPath } from '@nosferatu500/react-sortable-tree';
import '@nosferatu500/react-sortable-tree/style.css'; // This only needs to be imported once in your app
import Button from '@mui/material/Button';

const Sibmenu =() => {
  const [data_submenu,setDateSubmenu] = useState([
    { title: 'Chicken', children: [{ title: 'Egg' }] },
    { title: 'Fish', children: [{ title: 'fingerline' }] },
  ])
  const getNodeKey = ({ treeIndex }) => treeIndex;

  let removeNode = (path) => {
    setDateSubmenu(
      removeNodeAtPath({
        treeData: data_submenu,
        path,
        getNodeKey: ({ treeIndex }) => treeIndex,
     
    }));
  }
  let insertNewNode = () => {
    setDateSubmenu(
       insertNode({
        treeData: data_submenu,
        depth: 0,
        minimumTreeIndex: data_submenu.length,
        newNode: { title: "", children: [] },
        getNodeKey: ({ treeIndex }) => treeIndex
      }).treeData
    
      
    );
  }
    return (
      <div class="container" style={{ height: 400,width:"50vw" }}>
        
        <SortableTree
          treeData={data_submenu}
          onChange={treeData => setDateSubmenu( treeData )}
          generateNodeProps={({ node, path }) => ({
            title: (
            <>
                <input
                  style={{ fontSize: "1rem", width: 200 }}
                  value={node.title}
                  onChange={event => {
                    const title = event.target.value;
                    setDateSubmenu( changeNodeAtPath({
                      treeData: data_submenu,
                      path,
                      getNodeKey,
                      newNode: { ...node, title }
                   
                  }))
                      ;
                  }}
                />&nbsp;&nbsp;&nbsp;
                <Button 
                variant="text"
                size='mini'    onClick={(e) => { e.preventDefault()
                   insertNewNode(path) }} >
                    add
                   </Button>
                <Button size='mini'   
                variant="text"
                onClick={(e) => {
                  removeNode(path) }} >
                    delete
                  </Button>
                  </>
            )
          })}
        />
      </div>
    );
  }
  export default  Sibmenu
