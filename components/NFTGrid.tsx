import type {NFT as NFTType} from "@thirdweb-dev/sdk";
import { SimpleGrid, Skeleton,  Text } from "@chakra-ui/react";
import NFT from "./NFT";
import Link from "next/link";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";

type Props = {
    isLoading: boolean;
    data: NFTType[] | undefined;
    overrideOnclickBehaviour?: (nft: NFTType) => void;
    emptyText?: string;
};

export default function NFTGrid({
    isLoading,
    data,
    overrideOnclickBehaviour,
    emptyText = "NO NFTs Found",
}: Props) {
    return(
        <SimpleGrid columns={4} spacing={6} w={"100%"} padding={2.5}  my={5}>
            {isLoading ? (
                [...Array(20)].map((_, index) => (
                    <Skeleton key={index} height={"312px"} width={"100%"}/>
                ))
            ) : data && data.length > 0 ? (
                data.map((nft) =>
                    !overrideOnclickBehaviour ? (
                        <Link 
                            href={`/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`}
                            key={nft.metadata.id}
                        >
                        <NFT nft={nft}/>
                        </Link>
                    ) : (
                        <div
                            key={nft.metadata.id}
                            onClick={() => overrideOnclickBehaviour(nft)}
                        >
                            <NFT nft={nft} />
                        </div>
                    ))
            ) : (
                <Text>{emptyText}</Text>
            )}
        </SimpleGrid>
    )
}