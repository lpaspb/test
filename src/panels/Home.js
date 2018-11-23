import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Cell, ListItem, List,  Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';
import Icon16Like from '@vkontakte/icons/dist/16/like';
import Messages28 from '@vkontakte/icons/dist/28/messages';
import icon from '../img/web-design.svg'
const data = {
	items: [
		{
		title: 'Сделай сальто',
		status: 'accept',
		author: 'Павел Любачев',
		to_who: 'любому',
		price: 1200,
		img:'https://pp.userapi.com/c847120/v847120721/113c58/N3y7uhFJhs8.jpg',
		time: {
			start: '1 ноября',
			end: '11 ноября'
		}
	},
	{
	title: 'Поцелуй книгу',
	author: 'Тиен Мань',
	status: 'pending',
	to_who: 'любому',
	price: 1200,
	img:'https://pp.userapi.com/NOGkthIy-CqOlvspDqZxLTZq6fg8WbjyFKI00g/v85SP4U2Rng.jpg',
	time: {
		start: '1 ноября',
		end: '11 ноября'
	}
},
{
title: 'Сшей кошелек',
author: 'Григорий Любачев',
to_who: 'любому',
status: 'pending',
price: 1200,
img:'https://pp.userapi.com/c831408/v831408360/cef6f/vMVvCyvjVBo.jpg',
time: {
	start: '1 ноября',
	end: '11 ноября'
}
},
{
title: 'Выйди голым на улицу',
author: 'Любачев Павел',
status: 'pending',
to_who: 'любому',
price: 1200,
img:'https://pp.userapi.com/c847120/v847120721/113c58/N3y7uhFJhs8.jpg',
time: {
	start: '1 ноября',
	end: '11 ноября'
}
},
{
title: 'Удиви меня',
author: 'Григорий Любачев',
status: 'vote',
to_who: 'любому',
price: 1200,
img:'https://pp.userapi.com/c831408/v831408360/cef6f/vMVvCyvjVBo.jpg',
time: {
	start: '1 ноября',
	end: '11 ноября'
}
},
	]
}

class Home extends React.Component {
render() {
	return(
	<Panel id='items_list'>
		<Group title='Доступные задания'>
		<List>
		{data.items.map((item) => {

			if(item.status == 'pending') {
				return (
					<Cell indicator='1000 E' before={<Avatar size={72} src={item.img}/>}>
					<div><b>{item.title}</b></div>
					<div style={{color:'gray', fontSize:14}}><b>{item.author}</b> бросил вызов {item.to_who}</div>
					<Button>Принять вызов!</Button>
				</Cell>
			)
		} else if (item.status == 'accept') {
			return (
				<Cell indicator='1000 E' before={<Avatar size={72} src={item.img}/>}>
				<div><b>{item.title}</b></div>
				<div style={{color:'gray', fontSize:14}}><b>Иван принял вызов {item.author}</b></div>
				<div>Осталось 22 часа 30 минут на пруфы</div>
			</Cell>
		)
		}
		else if (item.status == 'vote') {
			return (
<Group>
				<Cell indicator='1000 E' before={<Avatar size={72} src={item.img}/>}>
				<div><b>{item.title}</b></div>

				<Cell
	            before={<Avatar style={{ background: 'var(--destructive)' }} size={28}><Icon16Like fill="var(--white)" /></Avatar>}
	            description="26 лайков"
	          >
					<div>Григорий <Button level='secondary'>Смотреть пруф</Button></div>
				</Cell>
				<Cell
	            before={<Avatar style={{ background: 'var(--destructive)' }} size={28}><Icon16Like fill="var(--white)" /></Avatar>}
	            description="1012 лайков"
	          >
					<div>Фам Тиен Мань <Button level='secondary'>Смотреть пруф</Button></div>

				</Cell>
				<Cell
	            before={<Avatar style={{ background: 'white' }} size={28}><Messages28/></Avatar>}
	            description="10"
	          >
				</Cell>
			</Cell>
			</Group>
		)
		}

}
		)}

		</List>
		</Group>
	</Panel>
)
}
}



export default Home;
