import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Skeleton, Switch, Card, Icon, Avatar, Radio, Tag, Button, Row, Col, Layout } from 'antd';
const { Header, Content, Footer } = Layout;


const { Meta } = Card;

class Home extends React.Component {
  state = {
    loading: true,
  }

  onChange = (checked) => {
    this.setState({ loading: !checked });
  }

  render() {
    const { loading } = this.state;

    return (
<Layout>
			<Row>
			<Col span={8}></Col>
			      <Col span={8}>
        <Card

					style={{ width: 550, marginTop: 16 }}
          actions={[
					<div>
					<Avatar style={{marginRight:10}} src="https://pp.userapi.com/NOGkthIy-CqOlvspDqZxLTZq6fg8WbjyFKI00g/v85SP4U2Rng.jpg"/>
					<Icon type="heart" theme='filled' style={{marginRight: '5px',color:'red', fontSize:'18px', verticalAlign:'middle'}}/>
					<span style={{color:'red'}}>2</span>

					</div>,
					<Radio.Group>
					<Radio.Button value="large">Павел</Radio.Button>
					<Radio.Button value="default">Тиен</Radio.Button>
					</Radio.Group>,
					<div>
					<Avatar style={{marginRight:10}} src="https://pp.userapi.com/NOGkthIy-CqOlvspDqZxLTZq6fg8WbjyFKI00g/v85SP4U2Rng.jpg"/>
					<Icon type="heart" theme='filled' style={{marginRight: '5px',color:'red', fontSize:'18px', verticalAlign:'middle'}}/>
					<span style={{color:'red'}}>2</span>
					</div>
				]}
					activeTabKey="1"

        >
          <Skeleton loading={false} avatar active>
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Чихни с открытыми глазами"
              description={	<div><Tag color="gold">Выигрыш: 200 У.Е</Tag> <Tag color="green">Идет Голосование</Tag><p  style={{marginTop:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p><h4 style={{marginTop:'15px'}}>Осталось 22:59</h4></div>}

            />


          </Skeleton>

<video controls="controls" style={{width:'100%', marginTop:'20px'}} autoplay></video>
        </Card>


				<Card
					style={{ width: 550, marginTop: 16 }}
          actions={[
					<div>
					<Avatar style={{marginRight:10}} src="https://pp.userapi.com/NOGkthIy-CqOlvspDqZxLTZq6fg8WbjyFKI00g/v85SP4U2Rng.jpg"/>


					</div>,
					<Button type="primary">Принять вызов</Button>
				]}
					activeTabKey="1"

        >
          <Skeleton loading={false} avatar active>
            <Meta
              avatar={<Avatar src="https://pp.userapi.com/c847120/v847120721/113c58/N3y7uhFJhs8.jpg" />}
              title="Чихни с открытыми глазами"
              description={	<div><Tag color="gold">Выигрыш: 200 У.Е</Tag> <Tag color="blue">Поиск соперника</Tag><p style={{marginTop:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p><h4 style={{marginTop:'15px'}}>Осталось 22:59</h4></div>}

            />


          </Skeleton>


        </Card>
				<Card
					style={{ width: 550, marginTop: 16 }}
          actions={[
					<div>
					<Avatar style={{marginRight:10}} src="https://pp.userapi.com/NOGkthIy-CqOlvspDqZxLTZq6fg8WbjyFKI00g/v85SP4U2Rng.jpg"/>


					</div>,
					<Avatar style={{marginRight:10}} src="https://pp.userapi.com/c847120/v847120721/113c58/N3y7uhFJhs8.jpg"/>
				]}
					activeTabKey="1"

        >
          <Skeleton loading={false} avatar active>
            <Meta
              avatar={<Avatar src="https://pp.userapi.com/c847120/v847120721/113c58/N3y7uhFJhs8.jpg" />}
              title="Чихни с открытыми глазами"
              description={	<div><Tag color="gold">Выигрыш: 200 У.Е</Tag> <Tag color="cyan">Заливаются пруфы</Tag><p style={{marginTop:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p><h4 style={{marginTop:'15px'}}>Осталось 22:59</h4></div>}

            />


          </Skeleton>


        </Card>

				<Card

					style={{ width: 550, marginTop: 16, marginBottom: 16}}
          actions={[
					<div>
					<Avatar style={{marginRight:10}} src="https://pp.userapi.com/NOGkthIy-CqOlvspDqZxLTZq6fg8WbjyFKI00g/v85SP4U2Rng.jpg"/>
					<Icon type="heart" theme='filled' style={{marginRight: '5px',color:'gold', fontSize:'18px', verticalAlign:'middle'}}/>
					<span style={{color:'gold'}}>3</span>

					</div>,
					<Radio.Group>
					<Radio.Button value="large">Павел</Radio.Button>
					<Radio.Button value="default">Тиен</Radio.Button>
					</Radio.Group>,
					<div>
					<Avatar style={{marginRight:10}} src="https://pp.userapi.com/c847120/v847120721/113c58/N3y7uhFJhs8.jpg"/>
					<Icon type="heart" theme='filled' style={{marginRight: '5px',color:'red', fontSize:'18px', verticalAlign:'middle'}}/>
					<span style={{color:'red'}}>2</span>
					</div>
				]}
					activeTabKey="1"

        >
          <Skeleton loading={false} avatar active>
            <Meta
              avatar={<Avatar src="https://pp.userapi.com/c847120/v847120721/113c58/N3y7uhFJhs8.jpg" />}
              title="Чихни с открытыми глазами"
              description={	<div><Tag color="gold">Выигрыш: 200 У.Е</Tag> <Tag color="red">Завершен</Tag><p  style={{marginTop:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p><h4 style={{marginTop:'15px'}}>Осталось 22:59</h4></div>}

            />


          </Skeleton>

<video controls="controls" style={{width:'100%', marginTop:'20px'}} autoplay></video>
        </Card>
				</Col>
				<Col span={8}></Col>
      </Row>
			</Layout>
    );
  }
}


export default Home;
