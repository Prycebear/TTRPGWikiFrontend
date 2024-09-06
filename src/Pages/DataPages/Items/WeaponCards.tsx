import useFetch from "../../../Functions/UseFetch/UseFetchGet.ts";
import {ButtonGroup, Row} from "reactstrap";
import WeaponDataInline from "../../../Components/Cards/WeaponDataInline.tsx";

export default function WeaponCards() {

    interface Weapon {

        itemId: number;
        itemName: string;
        rarity: string;
        weaponDamageType: string;
        weaponDiceDamage: string;
        weaponProperties: string[];
        weaponType: string;
        weaponSize: string;
    }


    const [weaponCardURLs] = useFetch('http://localhost:8080/items/weapons/all/cards');
    const weaponCard: Weapon[] = weaponCardURLs;


    return (

        <div>
            <main className="align-middle">
                <div className="px-4 py-3 text-center">
                    <h1 className="display-8 fw-bold">Continents</h1>
                    <ButtonGroup aria-label="Basic example">
                    </ButtonGroup>
                </div>

            </main>
            <Row className="justify-content-md-center" xxl={2} lg={2} md={4} sm={2} xs={2}>
                {weaponCard && weaponCard.map(item => {
                        return (
                            <WeaponDataInline
                                id={item.itemId}
                                itemName={item.itemName}
                                rarity={item.rarity}
                                damageType={item.weaponDamageType}
                                weaponType={item.weaponType}
                                weaponSize={item.weaponSize}
                                weaponDiceDamge={item.weaponDiceDamage}
                            />
                        )
                    }
                )}
            </Row>
        </div>
    )
}