
export default{
  state: {
    blogs: [
        {id: 1, title: 'Blog',  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis numquam aliquam ullam architecto nemo eligendi recusandae quia dolor debitis!", blogPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqG2D4GZa7LDMSoa-VTj_p4IooD98_Na3XQ&usqp=CAU', blogDate: '12/03/20212'},
        {id: 2, title: 'Blog2',  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis numquam aliquam ullam architecto nemo eligendi recusandae quia dolor debitis!", blogPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqG2D4GZa7LDMSoa-VTj_p4IooD98_Na3XQ&usqp=CAU', blogDate: '12/03/20212'},
        {id: 3, title: 'Blog3',   description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis numquam aliquam ullam architecto nemo eligendi recusandae quia dolor debitis!",blogPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd81fG7H6bmFSZJ21OjrZKpILUfnzWHSZnbQ&usqp=CAU', blogDate: '12/03/20212'},
        {id: 4, title: 'Blog4',  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis numquam aliquam ullam architecto nemo eligendi recusandae quia dolor debitis!", blogPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZIKelxCg9Y2-fjyU42vBP_jBRLuDJukaaA&usqp=CAU', blogDate: '12/03/20212'},
        {id: 5, title: 'Blog5',  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis numquam aliquam ullam architecto nemo eligendi recusandae quia dolor debitis!", blogPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrf9Jp_TtPON9wONFWpBKNi2b2QDOpn4VOg&usqp=CAU', blogDate: '12/03/20212'},
      ],
      editPost: null,
  },
  mutations: {
     
  },
  actions: {
  },
  getters: {
  getBlog: (state) => (id) => {
    return state.blogs.find(item => item.id == id)
  }
  }
 
}
