import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({
    color,
    userApiKey,
    apiKeyValue,
    statusApiKey,

}) => {
    return (
        <>
            <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <img
                        src={require("assets/img/bootstrap.jpg").default}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                    ></img>{" "}
                    <span
                        className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                        }
                    >
                        { userApiKey }
                    </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-1">
                            <i className="fas fa-key"></i>
                        </span>
                        <input type="password" placeholder="API Key value" className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10" value={ apiKeyValue } disabled/>
                    </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className={( statusApiKey ) ? "fas fa-circle text-emerald-500 mr-2" : "fas fa-circle text-red-500 mr-2"}></i> { (statusApiKey) ? 'Active' : 'Inactive' }
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        <i className="fas fa-eye"></i>
                    </button>
                    <button className="bg-red-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        <i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}

TableRow.defaultProps = {
    userApiKey: "Nubex",
    apiKeyValue: "adac77sadavdfsdha8sff3as39afasac6b7",
    statusApiKey: true,
}

TableRow.propTypes = {
    color: PropTypes.string,
    userApiKey: PropTypes.string.isRequired,
    apiKeyValue: PropTypes.string.isRequired,
    statusApiKey: PropTypes.bool.isRequired,
}

export default TableRow;