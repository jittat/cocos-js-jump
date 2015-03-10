var Block = cc.Sprite.extend({
    ctor: function( x1, y1, x2, y2 ) {
        this._super();
        this.initWithFile( 'res/images/ground.png',
                           cc.rect( 0, 0, x2-x1, y2 - y1 ) );
        this.setAnchorPoint( cc.p( 0, 0 ) );
        this.setPosition( cc.p( x1, y1 ) );
    },

    getTopY: function() {
        return cc.rectGetMaxY( this.getBoundingBoxToWorld() );
    },

    hitTop: function( oldRect, newRect ) {
        var brect = this.getBoundingBoxToWorld();
        if ( cc.rectGetMinY( oldRect ) >= cc.rectGetMaxY( brect ) ) {
            var loweredNewRect = cc.rect( newRect.x,
                                          newRect.y - 1,
                                          newRect.width,
                                          newRect.height + 1 );
            var uRect = cc.rectUnion( oldRect, loweredNewRect );
            return cc.rectIntersectsRect( uRect, brect );
        }
        return false;
    },

    onTop: function( rect ) {
        var brect = this.getBoundingBoxToWorld();
        var bminx = cc.rectGetMinX( brect );
        var bmaxx = cc.rectGetMaxX( brect );
        var minx = cc.rectGetMinX( rect );
        var maxx = cc.rectGetMaxX( rect );
        return ( minx <= bmaxx ) && ( bminx <= maxx );
    }
});

