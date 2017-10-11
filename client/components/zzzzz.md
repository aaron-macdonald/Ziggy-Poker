</div>
<div className=''>
 <label htmlFor='image'>Image</label>
 <input
   type='text'
   name='image'
   value={this.state.image}
   onChange={(e) => this.setState({ leastFavHeads: e.target.value })}
 />


 let {id, firstName, surName, knickName, favHand, favHeadsUp, leastFavHeadsUp, image} = props
 let updatedPlayer = {id, firstName, surName, knickName, favHand, favHeadsUp, leastFavHeadsUp, image}
