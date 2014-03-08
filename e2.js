// Made by Crazy4Redstone

Block.defineBlock (116,'Enchantment_Table',[['enchanting_table_top',0]],1,false,0)
Block.setShape (116,0,0,0,1,3/4,1)
Block.setDestroyTime (116,0.01)

function destroyBlock (x,y,z,id)
{
	if (id == 116)
	{
	Level.dropItem (x,y,z,0,116,1)
	}
}
