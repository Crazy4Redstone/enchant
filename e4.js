// Made by Crazy4Redstone

// Functions






// Blocks

Block.defineBlock (116,'Enchantment Table',[['enchanting_table_bottom',0],['enchanting_table_top',0],['enchanting_table_side',0],['enchanting_table_side',0],['enchanting_table_side',0],['enchanting_table_side',0]],1,false,0)
Block.setShape (116,0,0,0,1,3/4,1)
Block.setDestroyTime (116,0.01)
Block.setRenderLayer (116,2)

function destroyBlock (x,y,z,id)
{
	if (id == 116)
	{
	Level.dropItem (x,y,z,0,116,1)
	}
}
