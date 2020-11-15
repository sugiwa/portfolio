import React from 'react';
import Button from '@material-ui/core/Button';

class Work extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isModalOpen: false,
    }
  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render(){
    let openButton
    let period
    if(this.props.isPortfolio){
      openButton = (
        <div className='button-frame'>
          <Button onClick={()=>this.toggleModal()} variant='outlined' className='detailButton'>詳細</Button>
        </div>
      )
    }else if(this.props.experience !== ''){
      period = (<div>使用期間：{this.props.experience}</div>)
    }

    let modal
    if(this.state.isModalOpen){
      modal = (
        <div className='modal-back'>
          <div className='modal-frame'>
            <img src={this.props.image} alt={this.props.name}/>
            <div className='modal-description'>
              <h4>{this.props.name}</h4>
              <p>使用技術：{this.props.skill}</p>
              <p>{this.props.description}</p>
              <p>{this.props.details}</p>
              <Button variant='outlined' size='small' href={this.props.url}>サイトへ行く</Button>
              <br />
              <Button onClick={()=>this.toggleModal()} variant='outlined'>閉じる</Button>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className='work-frame'>
          <div className='work-box'>
              <img src={this.props.image} alt={this.props.name}/>
              <div className='work-description'>
                  <h4>{this.props.name}</h4>
                  <p>{this.props.description}</p>
                  {period}
                  {openButton}
                  {modal}
              </div>
          </div>
      </div>
    );
  }
}

export default Work;
