"""Change columns to be nullable

Revision ID: eb5866d51fd2
Revises: 67cc006d50bf
Create Date: 2023-10-04 10:18:25.640458

"""

from typing import Sequence, Union

from alembic import op

# revision identifiers, used by Alembic.
revision: str = "eb5866d51fd2"
down_revision: Union[str, None] = "67cc006d50bf"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    connection = op.get_bind()

    pass
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###
