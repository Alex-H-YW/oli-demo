import React, { useState } from 'react'
import { IApiList } from ".././interface/interface"
// type IApiList = IApiItem[];

// type IApiItem = {
//   id: number;
//   name: string;
//   url: string;
//   description: string;
//   params: IParams[];
//   responseKey: string[];
// };

// type IParams = {
//   id?: number;
//   name: string;
//   type: string;
//   description: string;
//   require: string;
// };

const DataContext = React.createContext({});

const ApiList: IApiList = [
    {id:0, 
    name: "股票列表", 
    url: "new_watchlist", 
    description:"获取澳股+美股关注表代码", 
    params:[{name: "country",type: "string", description:"AU or US 澳股或美股, 不加参数选取所有澳股美股", require:"可选"}],
    responseKey: ["symbol"]
    },
    {id:1, 
    name: "股票列表(含全称)", 
    url: "new_watchlist_inc_name", 
    description:"获取澳股+美股关注表代码和全称", 
    params:[{name: "country",type: "string", description:"AU or US 澳股或美股, 不加参数选取所有澳股美股", require:"可选"}],
    responseKey: ["symbol"]
    },
    {id:2, 
    name: "股票每日历史K线", 
    url: "price", 
    description: "获取股票历史每日K线", 
    params: [{id:0, name: "symbol",type: "string", description:"股票代码，格式为XXX_ASX", require:"必填"},
            {id:1, name: "date_from",type: "string", description:"开始时间", require:"必填"},
            {id:2, name: "date_to",type: "string", description:"结束时间", require:"必填"},
            ],
    responseKey: ["time", "open", "high", "low", "close", "adj_close", "volume"]
    },
    {id:3, 
    name: "股票机构评级", 
    url: "recommendations", 
    description:"获取某股票所有机构评级", 
    params:[{id:0, name: "symbol",type: "string", description:"股票代码，格式为XXX_ASX", require:"必填"},
            ],
    responseKey: ["time", "open", "high", "low", "close", "adj_close", "volume"]
    },
    {id:4, 
    name: "股票最新机构评级", 
    url: "latest_recommendations", 
    description:"获取某股票所有机构评级", 
    params:[{id:0, name: "symbol",type: "string", description:"股票代码，格式为XXX_ASX", require:"必填"},
            ],
    responseKey: ["time", "open", "high", "low", "close", "adj_close", "volume"]
    },
    {id:5, 
    name: "股票资产负债表", 
    url: "balance_sheets", 
    description:"获取某股票资产负载表（财报年)", 
    params:[{id:0, name: "symbol",type: "string", description:"股票代码，格式为XXX_ASX", require:"必填"},
            ],
    responseKey: ["time", "open", "high", "low", "close", "adj_close", "volume"]
    },
]


export const DataProvider = ({children}:any) => {
    const [apiInterface, setApiInterface ] = useState(ApiList)

        //通过Provider组件的value将state提供出去
        return (
            <div>
               <DataContext.Provider value={apiInterface}>
                   {children}
                </DataContext.Provider> 
            </div>
        )
    
}
export default DataContext;

