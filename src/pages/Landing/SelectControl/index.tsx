import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import './index.scss'

const { Option } = Select;

const SelectControl = (props: any) =>{
    // const [selectedValue, setSelectedValue] = useState( props.data.selectedValue | props.data.options[0].id);
    
    return(
        <>
            <div className='select-control'>
                <div className='select-control__lable'>{props.data.name}</div>
                <Select
                    value={props.data.selectedOption.id !== 0 ? props.data.selectedOption.id : null}
                    showSearch
                    size='large'
                    onSelect={(value: any) => {
                        props.onSelect(value);
                    }}
                    style={{ maxWidth: 200, minWidth: 200}}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
                    filterSort={(optionA, optionB) =>
                    (optionA!.children as unknown as string)
                        .toLowerCase()
                        .localeCompare((optionB!.children as unknown as string).toLowerCase())
                    }
                >
                    {props.data.options.map((element: any)=> {
                        return (
                            <>
                                <Option key={element.id} value={element.id} >{element.name}</Option>
                            </>
                        );
                    })}
                </Select>
            </div>
        </>
    );
}

export default SelectControl;