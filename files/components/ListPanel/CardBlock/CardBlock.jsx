import React from 'react'
import style from './../.././../App.module.css'

const CardBlock = ({ data, formatAirDate, deltaDate }) => {
    return (
        <div className={style.card_block}>
            <div className={style.card_block_header}>
                <div>logo {data.carrier.caption}</div>
                <div className={style.price_adult}>
                    <div>{data.price.total.amount} &#8381;</div>
                    <div className={style.for_adult}>Cтоимость для одного взрослого пассажира</div>
                </div>
            </div>
            <div className={style.card_block_info}>
                <div className={style.arrival_block}>
                    <div>
                        {
                            data.legs[0].segments.length == 1
                                ? <div>
                                    <span>{data.legs[0].segments[0].departureCity.caption}, {data.legs[0].segments[0].departureAirport.caption} <span className={style.blue_text}>({data.legs[0].segments[0].departureAirport.uid})
                         &#8594; </span>
                                        {data.legs[0].segments[0].arrivalCity.caption}, {data.legs[0].segments[0].arrivalAirport.caption} <span className={style.blue_text}>({data.legs[0].segments[0].arrivalAirport.uid})</span>
                                    </span>
                                </div>
                                : <div>
                                    <span>{data.legs[0].segments[0].departureCity.caption}, {data.legs[0].segments[0].departureAirport.caption} <span className={style.blue_text}>({data.legs[0].segments[0].departureAirport.uid})
                         &#8594; </span>
                                        {data.legs[0].segments[data.legs[0].segments.length - 1].arrivalCity.caption}, {data.legs[0].segments[data.legs[0].segments.length - 1].arrivalAirport.caption} <span className={style.blue_text}>({data.legs[0].segments[data.legs[0].segments.length - 1].arrivalAirport.uid})</span>
                                    </span>
                                </div>

                        }
                    </div>
                    {
                        data.legs[0].segments.length == 2
                            ? <div className={style.time_block}>
                                <div>{formatAirDate(data.legs[0].segments[0].departureDate)}</div>
                                <div>
                                    {deltaDate(data.legs[0].segments[0].departureDate, data.legs[0].segments[1].arrivalDate)}
                                </div>
                                <div>{formatAirDate(data.legs[0].segments[1].arrivalDate)}</div>
                            </div>
                            : <div className={style.time_block}>
                                <div>{formatAirDate(data.legs[0].segments[0].departureDate)}</div>
                                <div>
                                    {deltaDate(data.legs[0].segments[0].departureDate, data.legs[0].segments[0].arrivalDate)}
                                </div>
                                <div>{formatAirDate(data.legs[0].segments[0].arrivalDate)}</div>
                            </div>

                    }
                    <div className={style.transfer_message}>
                        {
                            data.legs[0].segments.length == 1
                                ? <span className={style.line}></span>
                                : <span>&#9719;<span className={style.orange_text}> 1 пересадка</span></span>
                        }
                    </div>
                    <div className={style.airline_str}>
                        <span>Рейс выполняет: {data.legs[0].segments[0].airline.caption}</span>
                    </div>
                </div>
                <div className={style.deport_block}>
                    <div>
                        {
                            data.legs[1].segments.length == 1
                                ? <div>
                                    <span>{data.legs[1].segments[0].departureCity.caption}, {data.legs[1].segments[0].departureAirport.caption} <span className={style.blue_text}>({data.legs[1].segments[0].departureAirport.uid})
                         &#8594; </span>
                                        {data.legs[1].segments[0].arrivalCity.caption}, {data.legs[1].segments[0].arrivalAirport.caption} <span className={style.blue_text}>({data.legs[1].segments[0].arrivalAirport.uid})</span>
                                    </span>
                                </div>
                                : <div>
                                    <span>{data.legs[1].segments[0].departureCity.caption}, {data.legs[1].segments[0].departureAirport.caption} <span className={style.blue_text}>({data.legs[1].segments[0].departureAirport.uid})
                         &#8594; </span>
                                        {data.legs[1].segments[data.legs[1].segments.length - 1].arrivalCity.caption}, {data.legs[1].segments[data.legs[1].segments.length - 1].arrivalAirport.caption} <span className={style.blue_text}>({data.legs[1].segments[data.legs[1].segments.length - 1].arrivalAirport.uid})</span>
                                    </span>
                                </div>

                        }
                    </div>
                    {
                        data.legs[1].segments.length == 2
                            ? <div className={style.time_block}>
                                <div>{formatAirDate(data.legs[1].segments[0].departureDate)}</div>
                                <div>
                                    {deltaDate(data.legs[1].segments[0].departureDate, data.legs[1].segments[1].arrivalDate)}
                                </div>
                                <div>{formatAirDate(data.legs[1].segments[1].arrivalDate)}</div>
                            </div>
                            : <div className={style.time_block}>
                                <div>{formatAirDate(data.legs[1].segments[0].departureDate)}</div>
                                <div>
                                    {deltaDate(data.legs[1].segments[0].departureDate, data.legs[1].segments[0].arrivalDate)}
                                </div>
                                <div>{formatAirDate(data.legs[1].segments[0].arrivalDate)}</div>
                            </div>
                    }

                    <div className={style.transfer_message}>
                        {
                            data.legs[1].segments.length == 1
                            ? <span className={style.line}></span>
                            : <span>&#9719;<span className={style.orange_text}> 1 пересадка</span></span>
                        }
                    </div>
                    <div>
                        <span>Рейс выполняет: {data.legs[1].segments[0].airline.caption}</span>
                    </div>
                </div>
            </div>
            <div className={style.card_btn_block}>
                <button className={style.card_btn}>Выбрать</button>
            </div>
        </div>
    )
}

export default CardBlock