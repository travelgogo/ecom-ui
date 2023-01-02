import React, { useState } from "react";
import './index.scss';
import SelectControl from './SelectControl';
import LocationCard from './LocationCard';
import { Button, Carousel, Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import DatePickerControl from "./DatePickerControl";
import { StarOutlined } from "@mui/icons-material";

const travelScopes = [
    {name: "Du lịch trong nước", id: 1},
    {name: "Du lịch nước ngoài", id: 2}
] 
const travelRegions = [
    {
        scopeId: 1,
        regions: [
            {name: "Miền Bắc", id: 1}, 
            {name: "Miền Trung", id: 2},
            {name: "Miền Nam", id: 3}
        ]
    },
    {
        scopeId: 2,
        regions: [
            {name: "Châu Á", id: 4}, 
            {name: "Châu Âu", id: 5}
        ]
    }
]
const travelLocations = [
    {
        regionId: 1,
        locations: [
            {name: "Hà Nội", id: 1}, 
            {name: "Spa", id: 2},
            {name: "Hạ Long", id: 3}
        ]
    },
    {
        regionId: 4, 
        locations: [
            {name: "Hàn Quốc", id: 4}, 
            {name: "Nhật Bản", id: 5}
        ]
    }
]
const tourPrices = [
    {
        name: "Từ 2 triệu đến 5 triệu", id: 1
    },
    {
        name: "Từ 5 triệu đến 10 triệu", id: 2
    },
    {
        name: "Trên 10 triệu", id: 3
    },
]

const LandingPage = () => {
    const [currentScopeData, setCurrentScopeData] = useState(travelScopes[0]);

    const [currentRegionData, setCurrentRegionData] = useState({
        scopeId: travelRegions[0].scopeId, 
        regions: travelRegions[0].regions,
        selectedRegion: travelRegions[0].regions[0]
    })

    const [currentLocationData, setCurrentLocationData] = useState({
        regionId: travelLocations[0].regionId,
        locations: travelLocations[0].locations,
        selectedLocation: travelLocations[0].locations[0]
    })
    const [currentPriceData, setCurrentPriceData] = useState(tourPrices[0]);
    
    const travelScopeSelect = (value: any) => {
        let scope = travelScopes.find(x => x.id === value);
        scope && setCurrentScopeData(scope);

        let region = travelRegions.find(x => x.scopeId === value);
        setCurrentRegionData({
            scopeId: region?.scopeId || 0, 
            regions: region?.regions || [],
            selectedRegion: region?.regions[0] || {name: "", id: 0}
        })

        let location = region && travelLocations.find(x => x.regionId === region?.regions[0].id);
        setCurrentLocationData({
            regionId: location?.regionId || 0,
            locations: location?.locations || [],
            selectedLocation: location?.locations[0] || {name: "", id: 0}
        })
    }
    
    const travelRegionSelect = (value: any) => {
        const region = currentRegionData.regions.find(x => x.id === value);
        region && setCurrentRegionData({
            scopeId: currentRegionData.scopeId,
            regions: currentRegionData.regions,
            selectedRegion: region
        })
        const location = travelLocations.find(x => x.regionId === value);
        setCurrentLocationData({
            regionId: location?.regionId || 0,
            locations: location?.locations || [],
            selectedLocation: location?.locations[0] || {name: "", id: 0}
        })
    }

    const travelLocationSelect = (value: any) =>{
        const location = currentLocationData.locations.find(x => x.id === value);
        setCurrentLocationData({
            regionId: currentLocationData.regionId,
            locations: currentLocationData.locations,
            selectedLocation: location || {name: "", id: 0}
        })
    }

    const tourPriceSelect = (value: any) => {
        let price = tourPrices.find(x => x.id === value)
        price && setCurrentPriceData(price);
    }

    const contentStyle: React.CSSProperties = {
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        // background: '#364d79',
        //backgroundImage: `url(../../../../public/images/intro_1.jpg)`
    };
    const item1Style: React.CSSProperties = {
        backgroundImage: `url(../../../../public/images/intro_1.jpg)`
    };
    const item2Style: React.CSSProperties = {
        backgroundImage: `url(../../../../public/images/home_slider.jpg)`
    };
    return (
        <>
            <div>
                <Carousel autoplay>
                    <div>
                        <div className="slide-item slide-item_1" 
                            >
                                1
                        </div>
                    </div>
                    <div>
                        <div className="slide-item slide-item_2" 
                            >
                                2
                        </div>
                    </div>
                    {/* <div>
                        <div className="slide-item slide-item_3" style={contentStyle}>3</div>
                    </div>
                    <div>
                        <div className="slide-item slide-item_4" style={contentStyle}>4</div>
                    </div> */}
                </Carousel>
            </div>
            <div className="search_panel">
                <div className="select-control-wrapper">
                    <SelectControl 
                        data={{
                            name: "Du lịch", 
                            options: travelScopes,
                            selectedOption: currentScopeData
                        }} 
                        onSelect={travelScopeSelect} />
                </div>
                <div className="select-control-wrapper">
                    <SelectControl 
                        data={{
                            name:"Vùng miền", 
                            options: currentRegionData.regions, 
                            selectedOption: currentRegionData.selectedRegion
                        }}
                        onSelect={travelRegionSelect} />
                </div>
                <div className="select-control-wrapper">
                    <SelectControl 
                        data={{
                            name:"Điểm đến",
                            options: currentLocationData.locations, 
                            selectedOption: currentLocationData.selectedLocation
                        }}
                        onSelect={travelLocationSelect}/>
                </div>
                <div className="datepicker-control-wrapper">
                    <DatePickerControl data={{name:"Ngày khởi hành"}} />
                </div>
                <div className="select-control-wrapper">
                    <SelectControl 
                    data={{
                        name:"Giá tour",
                        options: tourPrices,
                        selectedOption: currentPriceData
                    }}
                    onSelect={tourPriceSelect}
                    />
                </div>
                <div className="btn-search-wrapper">
                    <Button 
                        type="primary" 
                        shape="round" 
                        icon={<SearchOutlined />} 
                        size='large'
                        style={{background:"#fa9e1b"}}>
                        Search
                    </Button>
                </div>
                
            </div>
            <div className="domestic-section">
                <h1 className="domestic-section__intro-title">Du lịch trong nước nổi bật</h1>
                <h3 className="domestic-section__intro-content">Chúng tôi mang đến cho quý khách những tour du lịch trong nước với nhiều địa điểm du lịch mới hấp dẫn</h3>
                <div className="domestic-section__images">
                    <Row>
                        <Col span={8} style={{padding: "15px"}}>
                            <LocationCard/>
                        </Col>
                        <Col span={8} style={{padding: "15px"}}>
                            <LocationCard/>
                        </Col>
                        <Col span={8} style={{padding: "15px"}}>
                            <LocationCard/>
                        </Col>
                    </Row>
                </div>
                <div className="btn-seemore-wrapper">
                    <Button 
                        type="primary" 
                        shape="round" 
                        icon={<SearchOutlined />} 
                        size='large'>
                        Xem thêm
                    </Button>
                </div>
            </div>
            <div className="domestic-section">
                <h1 className="domestic-section__intro-title">Địa điểm nước ngoài nổi tiếng</h1>
                <h3 className="domestic-section__intro-content">Nhiều địa điểm du lịch nước ngoài nổi tiếng được chúng tôi mở tour thường xuyên</h3>
                <div className="domestic-section__images">
                    <Row>
                        <Col span={8} style={{padding: "15px"}}>
                            <LocationCard/>
                        </Col>
                        <Col span={8} style={{padding: "15px"}}>
                            <LocationCard/>
                        </Col>
                        <Col span={8} style={{padding: "15px"}}>
                            <LocationCard/>
                        </Col>
                    </Row>
                </div>
                <div className="btn-seemore-wrapper">
                    <Button 
                        type="primary" 
                        shape="round" 
                        icon={<SearchOutlined />} 
                        size='large'>
                        Xem thêm
                    </Button>
                </div>
            </div>
            <div className="festival-section">
                <div className="festival-section__background-image"></div>
                <div className="festival-section__content-wrapper">
                    <h1 className="domestic-section__intro-title">SYDNEY - CANBERRA - LỄ HỘI HOA FLORIADE</h1>
                    <div>
                        <StarOutlined style={{color: '#fa9e1b'}} />
                        <StarOutlined style={{color: '#fa9e1b'}} />
                        <StarOutlined style={{color: '#fa9e1b'}} />
                        <StarOutlined style={{color: '#fa9e1b'}} />
                        <StarOutlined />
                    </div>
                    <h3 className="domestic-section__intro-content">Một chuyến du lịch Úc mùa xuân trải nghiệm hay một kỳ nghỉ hướng về thiên nhiên. Ăn uống, mua sắm, tìm hiểu văn hóa nghệ thuật hay khám phá những nền văn hóa lâu đời.</h3>
                </div>
            </div>
        </>
    );
}
export default LandingPage;