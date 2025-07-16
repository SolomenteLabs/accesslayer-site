fn main() {
    cosmwasm_schema::write_api! {
        instantiate: solopass_v2_contract::InstantiateMsg,
        execute: solopass_v2_contract::ExecuteMsg,
        query: solopass_v2_contract::QueryMsg,
    }
}

