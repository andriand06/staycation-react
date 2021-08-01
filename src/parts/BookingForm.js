import React, { Component } from 'react'
import InputNumber from 'components/InputNumber'
import InputDate from 'components/InputDate'
import Button from 'components/Button'
import { withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'


class BookingForm extends Component{
    state = {
        data : {
            duration : 1,
            date:{
                startDate : new Date(),
                endDate : new Date(),
                key : "selection"
            },

        },
    }

    updateData = (e) => {
        this.setState({
            ...this.state,
            data : {
                ...this.state.data,
                [e.target.name] : e.target.value
            },
        });
    }

    componentDidUpdate(_prevProps,prevState) {
        const {data} = this.state;
        if (prevState.data.date !== data.date) {
            const startDate = new Date(data.date.startDate);
            const endDate = new Date(data.date.endDate);
            const countDuration = new Date(endDate - startDate).getDate();

            this.setState({
                data:{
                    ...this.state.data,
                    duration : countDuration,
                },
            });
        }
        if (prevState.data.duration !== data.duration) {
            const startDate = new Date(data.date.startDate);
            const endDate = new Date(
              startDate.setDate(startDate.getDate() + +data.duration - 1)
            );
            this.setState({
              ...this.state,
              data: {
                ...this.state.data,
                date: {
                  ...this.state.data.date,
                  endDate: endDate,
                },
              },
            });
        }
    } 

    startBooking = () => {
        const { data } = this.state;
        this.props.startBooking({
            _id : this.props.itemDetails._id,
            duration : data.duration,
            date : {
                startDate: data.date.startDate,
                endDate : data.date.endDate,
            },
        });
        this.props.history.push("/checkout");
    }
    render() {
        const { data } = this.state;
        const { itemDetails, startBooking } = this.props;
        return (
            <div className="card bordered" style={{ padding: "60px 80px" }} >
                <h4 className="mb-3">Start Booking</h4>
                <h5 className="h2 text-teal mb-4">
                    ${itemDetails.price}
                    <span className="text-gray-500 font-weight-light"> per {itemDetails.unit}</span>
                </h5>
                <label htmlFor="duration">How long will you stay?</label>
                <InputNumber max={30} suffix={" night"} isSuffixPlural onChange={this.updateData} name="duration" value={data.duration} /> 

                <label htmlFor="date">Pick a Date</label>
                <InputDate value={data.date} onChange={this.updateData} name="date" />

                <h6 className="text-gray-500 font-weight-light">
                    You Will Pay{" "}
                    <span className="text-gray-900">{` $${itemDetails.price * data.duration} ` }</span>
                    per {" "}
                    <span className="text-gray-900">{data.duration} {` ${data.duration > 1 ? itemDetails.unit + "s" : itemDetails.unit}`}</span>
                </h6>

                <Button isBlock isPrimary hasShadow onClick={startBooking} className="btn px-5">
                    Start Booking
                </Button>
            </div>
        )
    }
}
BookingForm.propTypes= {
    itemDetails: PropTypes.object,
    startBooking: PropTypes.func,
}
export default withRouter(BookingForm);


